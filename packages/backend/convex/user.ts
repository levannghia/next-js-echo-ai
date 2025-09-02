import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query('users').collect()
    return users
  }
})

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    
    if (!identity) {
      return null;
    }
    
    // Log thông tin identity để debug
    console.log("Convex Identity:", identity);
    
    return {
      id: identity.tokenIdentifier,
      name: identity.name,
      email: identity.email,
      orgId: identity.orgId
    };
  }
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if(identity === null) {
      throw new Error("Not authenticated")
    }
    const orgId = identity?.orgId as string

    if(!orgId) {
      throw new Error("Messing organization")
    }

    throw new Error("Test Bug")

    const userId = await ctx.db.insert('users', {
      name: 'John Doe',
    })

    return userId
  }
})

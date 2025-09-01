import React from 'react'
import { OrganizationList } from '@clerk/nextjs'

export default function OrgSelectionView() {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      hidePersonal
      skipInvitationScreen
    />
  )
}

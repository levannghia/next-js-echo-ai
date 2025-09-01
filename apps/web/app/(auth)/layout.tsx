import { AuthLayout } from '@/modules/auth/ui/layouts/auth-layout'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
}

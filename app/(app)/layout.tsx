import { AppHeader } from "@/components/app/layout/AppHeader"
import { ChatStoreProvider } from "@/lib/store/chat-store-provider"
// import { OnboardingGuard } from "@/components/app/layout/onboarding/OnboardingGuard"
import { SanityLive } from "@/sanity/lib/live"
import { ClerkProvider } from "@clerk/nextjs"

function AppLayout({children} : {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <ChatStoreProvider>
      {/* <OnboardingGuard> */}
          <AppHeader/>
      {children}
      <SanityLive/>
        {/* </OnboardingGuard> */}
        </ChatStoreProvider>
    </ClerkProvider>
    
  )
}

export default AppLayout
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'About',
  description: 'Learn more about IntricaArt and the team behind it.',
}

export default function About() {
  return (
    <SimpleLayout
      title="About IntricaArt"
      intro="Discover the vision and creators behind IntricaArt, an AI-powered marketplace revolutionizing the art world through blockchain technology."
    >
      <div className="space-y-20">
        <ToolsSection title="Our Vision">
          <Tool title="Innovative AI-Powered Art Marketplace">
            IntricaArt is designed to connect artists with buyers using advanced AI and blockchain technology. Our platform enhances art creation, provides personalized recommendations, and ensures the authenticity and provenance of each piece of art through secure, transparent transactions.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Meet the Team">
          <Tool title="Ishwarya - Co-Founder">
            Ishwarya, a hackathon queen and talented artist, brings a unique blend of creativity and technical prowess to the team. Her artistic vision and experience ensure IntricaArt meets the needs of both artists and collectors.
          </Tool>
          <Tool title="Vinamra - Co-Founder">
            Vinamra, a tech enthusiast and hackathon veteran, is passionate about using technology for meaningful purposes. His expertise in AI and blockchain drives the innovation behind IntricaArt.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

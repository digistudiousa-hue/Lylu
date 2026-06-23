import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Privacy Policy — Lylu" };

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 mb-3 text-xl font-semibold text-white">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted">{children}</p>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc space-y-2 pl-6 text-muted">{children}</ul>
);

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 7, 2026">
      <P>
        This Privacy Policy explains how Lylu (&quot;Lylu,&quot; &quot;we,&quot;
        &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects your
        information when you visit{" "}
        <a className="text-accent2" href="https://lylu.ai">
          lylu.ai
        </a>{" "}
        or use our service (the &quot;Service&quot;). By using the Service you
        agree to the practices described here.
      </P>

      <H2>1. Information we collect</H2>
      <P>We collect the following categories of information:</P>
      <UL>
        <li>
          <strong className="text-white">Account information</strong> — name,
          email address, and password, provided through our authentication
          partner Clerk.
        </li>
        <li>
          <strong className="text-white">Payment information</strong> — billing
          details processed directly by Stripe. We do not store full card
          numbers on our servers.
        </li>
        <li>
          <strong className="text-white">Usage data</strong> — searches
          performed, filters applied, leads viewed and exported, and timestamps,
          stored to operate the Service and bill credits accurately.
        </li>
        <li>
          <strong className="text-white">Device and log data</strong> — IP
          address, browser type, device identifiers, and access logs collected
          automatically.
        </li>
        <li>
          <strong className="text-white">Cookies</strong> — used for
          authentication sessions and basic analytics. You can disable cookies
          in your browser, but the Service may not function correctly.
        </li>
      </UL>

      <H2>2. How we use information</H2>
      <UL>
        <li>To provide, maintain, and improve the Service.</li>
        <li>To process payments and manage your subscription.</li>
        <li>
          To communicate with you about your account, product updates, and
          customer support.
        </li>
        <li>To prevent fraud, abuse, and violations of our Terms of Service.</li>
        <li>To comply with legal obligations.</li>
      </UL>

      <H2>3. Lead data and public sources</H2>
      <P>
        The business records displayed in the Service are aggregated from
        publicly available sources, including public directories, business
        listings, and public-facing social profiles. We do not knowingly sell
        sensitive personal information. If you are a business owner and wish to
        have your record corrected or removed, contact{" "}
        <a className="text-accent2" href="mailto:hello@lylu.ai">
          hello@lylu.ai
        </a>{" "}
        and we will respond within 30 days.
      </P>

      <H2>4. Third-party processors</H2>
      <P>We share data only with the service providers needed to operate the Service:</P>
      <UL>
        <li>
          <strong className="text-white">Stripe</strong> — payment processing
          and fraud prevention.
        </li>
        <li>
          <strong className="text-white">Clerk</strong> — authentication and
          identity management.
        </li>
        <li>
          <strong className="text-white">Supabase</strong> — application
          database hosting.
        </li>
        <li>
          <strong className="text-white">Vercel</strong> — application hosting
          and CDN.
        </li>
      </UL>
      <P>
        Each provider is contractually bound to safeguard data they process on
        our behalf.
      </P>

      <H2>5. Data retention</H2>
      <P>
        We retain account and usage data for as long as your account is active
        and for a reasonable period afterward to comply with legal, accounting,
        and reporting obligations. You may request deletion at any time as
        described below.
      </P>

      <H2>6. Your rights</H2>
      <P>
        Depending on your jurisdiction (including the EU under GDPR and
        California under CCPA), you may have the right to access, correct,
        delete, or port your personal data, and to object to certain
        processing. To exercise these rights, email{" "}
        <a className="text-accent2" href="mailto:hello@lylu.ai">
          hello@lylu.ai
        </a>
        . We will respond within 30 days.
      </P>

      <H2>7. Security</H2>
      <P>
        We use industry-standard encryption in transit (TLS) and at rest, role-
        based access controls, and audit logging. No system is perfectly
        secure; we cannot guarantee absolute protection.
      </P>

      <H2>8. International transfers</H2>
      <P>
        Lylu operates from the United States. If you access the Service from
        outside the US, you consent to the transfer of your data to the United
        States where our infrastructure is located.
      </P>

      <H2>9. Children</H2>
      <P>
        The Service is not intended for individuals under 16. We do not
        knowingly collect data from children.
      </P>

      <H2>10. Changes to this policy</H2>
      <P>
        We may update this Privacy Policy from time to time. Material changes
        will be communicated by email or via in-product notice. The
        &quot;Last updated&quot; date at the top of this page reflects the most
        recent revision.
      </P>

      <H2>11. Contact</H2>
      <P>
        For any privacy-related question or request, contact us at{" "}
        <a className="text-accent2" href="mailto:hello@lylu.ai">
          hello@lylu.ai
        </a>
        .
      </P>
    </LegalLayout>
  );
}

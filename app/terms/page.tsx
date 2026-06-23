import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Terms of Service — Lylu" };

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 mb-3 text-xl font-semibold text-white">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted">{children}</p>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc space-y-2 pl-6 text-muted">{children}</ul>
);

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 7, 2026">
      <P>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use
        of Lylu (the &quot;Service&quot;), operated by Lylu (&quot;Lylu,&quot;
        &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By creating an
        account or using the Service, you agree to these Terms. If you do not
        agree, do not use the Service.
      </P>

      <H2>1. The Service</H2>
      <P>
        Lylu provides a business-intelligence and lead-generation platform that
        aggregates publicly available business information and presents it in a
        searchable interface. Features and capabilities may change over time at
        our discretion.
      </P>

      <H2>2. Accounts</H2>
      <UL>
        <li>
          You must be at least 18 years old and able to enter a binding
          contract to use the Service.
        </li>
        <li>
          You are responsible for keeping your credentials confidential and for
          all activity under your account.
        </li>
        <li>
          You must provide accurate information and promptly update it if it
          changes.
        </li>
      </UL>

      <H2>3. Subscriptions, billing, and credits</H2>
      <UL>
        <li>
          Paid plans renew monthly until cancelled. Charges are processed by
          Stripe in U.S. dollars unless otherwise specified.
        </li>
        <li>
          Credits included in a monthly plan reset at the start of each billing
          cycle and do not roll over unless explicitly stated.
        </li>
        <li>
          Top-up credit packs purchased separately do not expire while your
          account is active.
        </li>
        <li>
          You may cancel at any time from your account dashboard. Cancellation
          takes effect at the end of the current billing period; we do not
          provide pro-rated refunds for partial months.
        </li>
      </UL>

      <H2>4. Refunds</H2>
      <P>
        Subscription fees are non-refundable except where required by law or at
        our sole discretion. If you believe you were charged in error, contact
        us within 14 days at{" "}
        <a className="text-accent2" href="mailto:hello@lylu.ai">
          hello@lylu.ai
        </a>{" "}
        and we will review the request in good faith.
      </P>

      <H2>5. Acceptable use</H2>
      <P>When using the Service, you agree not to:</P>
      <UL>
        <li>
          Send unsolicited bulk communications in violation of CAN-SPAM, GDPR,
          CASL, or any applicable anti-spam law.
        </li>
        <li>
          Use the Service to harass, defraud, defame, or harm any person or
          business.
        </li>
        <li>
          Scrape, mirror, or resell the underlying data outside the intended
          use of the Service.
        </li>
        <li>
          Reverse-engineer, decompile, or attempt to access the Service&apos;s
          source code or infrastructure.
        </li>
        <li>
          Use automated tools to extract data at volumes exceeding your plan
          allocation.
        </li>
        <li>
          Violate any applicable law or third-party rights through your use of
          the Service.
        </li>
      </UL>
      <P>
        We may suspend or terminate accounts that violate these rules without
        prior notice and without refund.
      </P>

      <H2>6. Data accuracy and no guarantees</H2>
      <P>
        Business data is aggregated from public sources and may be incomplete
        or out of date. We make no warranty as to the accuracy, completeness,
        or fitness of any lead record for a particular purpose. You are solely
        responsible for verifying information before relying on it for
        business decisions or outreach.
      </P>

      <H2>7. Your responsibility for outreach</H2>
      <P>
        Lylu provides data only. You are solely responsible for any
        communications you send using leads obtained through the Service,
        including compliance with anti-spam, telemarketing, privacy, and
        commercial-email laws in your jurisdiction and the recipient&apos;s.
      </P>

      <H2>8. Intellectual property</H2>
      <P>
        The Service, including its software, design, trademarks, and brand
        elements, is the property of Lylu and is protected by copyright,
        trademark, and other applicable laws. We grant you a limited, non-
        exclusive, non-transferable license to use the Service for your
        internal business purposes during your subscription term.
      </P>

      <H2>9. Disclaimer of warranties</H2>
      <P>
        The Service is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, whether express or implied, including
        but not limited to merchantability, fitness for a particular purpose,
        and non-infringement. We do not warrant that the Service will be
        uninterrupted, error-free, or that data will always be accurate.
      </P>

      <H2>10. Limitation of liability</H2>
      <P>
        To the maximum extent permitted by law, Lylu shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages,
        or any loss of profits or revenue, arising from your use of the
        Service. Our total cumulative liability for any claim shall not exceed
        the greater of (a) the amount you paid us in the three months
        preceding the claim, or (b) one hundred U.S. dollars ($100).
      </P>

      <H2>11. Indemnification</H2>
      <P>
        You agree to indemnify and hold harmless Lylu and its officers,
        employees, and partners from any claims, damages, or expenses arising
        from your use of the Service, your violation of these Terms, or your
        violation of any third-party rights, including any outreach you send
        to leads obtained through the Service.
      </P>

      <H2>12. Termination</H2>
      <P>
        We may suspend or terminate your access to the Service at any time
        without notice for breach of these Terms or for any reason at our sole
        discretion. Upon termination, your right to use the Service ceases
        immediately. Sections 6 through 14 survive termination.
      </P>

      <H2>13. Changes to these Terms</H2>
      <P>
        We may revise these Terms from time to time. Material changes will be
        communicated by email or in-product notice at least 14 days before
        taking effect. Your continued use of the Service after the effective
        date constitutes acceptance of the revised Terms.
      </P>

      <H2>14. Governing law and disputes</H2>
      <P>
        These Terms are governed by the laws of the State of Delaware, without
        regard to its conflict-of-law provisions. Any dispute arising from
        these Terms or the Service shall be resolved exclusively in the state
        or federal courts located in Delaware, and you consent to personal
        jurisdiction there.
      </P>

      <H2>15. Contact</H2>
      <P>
        Questions about these Terms? Email{" "}
        <a className="text-accent2" href="mailto:hello@lylu.ai">
          hello@lylu.ai
        </a>
        .
      </P>
    </LegalLayout>
  );
}

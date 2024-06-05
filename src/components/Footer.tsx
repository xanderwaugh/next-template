import Link from "next/link";

import { FOOTER_ITEMS, SOCIAL_MEDIAS } from "~/utils";
import { companyTitle } from "~/utils/seoConfig";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        {FOOTER_ITEMS.map((item, idx) => (
          <Link
            key={idx + item.href + item.label}
            href={item.href}
            className="link-hover link"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {SOCIAL_MEDIAS.map(({ href, label, Icon }, idx) => (
            <Link
              key={label + idx + href}
              href={href}
              target="_blank"
              className="link-hover link"
            >
              <Icon className="size-5 text-base-content" />
            </Link>
          ))}
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          {companyTitle}
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

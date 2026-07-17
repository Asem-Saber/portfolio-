import { GENERAL_INFO, SOCIAL_LINKS } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="text-center pb-8 pt-4">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="w-16 h-px bg-border-cream mx-auto mb-6" />

        <div className="flex justify-center gap-8 mb-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="border-t border-border-cream pt-4">
          <p className="text-xs text-ink-faint">
            Designed & Built by {GENERAL_INFO.name}
          </p>
          <p className="text-xs text-ink-faint/60 mt-1">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

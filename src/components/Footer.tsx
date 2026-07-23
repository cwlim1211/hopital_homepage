import Image from "next/image";
import { BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} 로고`}
              width={2164}
              height={726}
              className="h-12 w-auto"
            />
            <div className="mt-4 space-y-1 text-[0.9rem] leading-relaxed text-ink-soft">
              <p>
                {siteConfig.address} {siteConfig.addressDetail}
              </p>
              <p>대표전화 {siteConfig.phone}</p>
              <p>사업자등록번호 {siteConfig.businessNumber}</p>
            </div>
          </div>

          <a
            href={siteConfig.naverBlogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-border px-5 text-[0.9rem] font-semibold text-ink-soft transition-colors hover:border-primary hover:text-primary"
          >
            <BookOpen size={17} aria-hidden="true" />
            네이버 블로그
          </a>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-[0.85rem] text-ink-soft">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

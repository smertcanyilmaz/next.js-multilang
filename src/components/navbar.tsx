"use client";

// import { useTranslations } from "next-intl";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navbar({ locale }: { locale: string }) {
//   const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLocale = event.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}/`);
  };

  return (
    <div className="w-full flex items-center justify-between p-10">
      <h1 className="text-3xl">Navbar</h1>
      <div className="flex items-center gap-5">
        {/* <Link href={`/${locale}/`}>{t("home")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link> */}
      </div>
      <select value={locale} onChange={handleLanguageChange}>
        <option value="tr">TR</option>
        <option value="en">En</option>
      </select>
    </div>
  );
}

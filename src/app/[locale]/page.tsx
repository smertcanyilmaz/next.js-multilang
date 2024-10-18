import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
    </div>
  );
}

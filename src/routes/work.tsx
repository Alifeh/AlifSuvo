import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { PageHeader } from "@/components/site/PageHeader";
import { photos } from "@/lib/work";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Alif Suvo" },
      {
        name: "description",
        content:
          "Selected photography by Alif Suvo: people, places and moments presented as one evolving body of work.",
      },
      { property: "og:title", content: "Work — Alif Suvo" },
      {
        property: "og:description",
        content: "Selected photography by Alif Suvo.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHeader
        label="Work"
        title="People, places, moments."
        intro="Selected photography by Alif Suvo."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-36 sm:px-10 sm:pb-48">
        <Gallery items={photos} />
      </div>
    </>
  );
}

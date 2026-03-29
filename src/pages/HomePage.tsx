

import ImageGenerator from "@/components/imageGenerator/ImageGenerator";
import InputField from "@/components/InputField";


export default function HomePage() {


  // const generate = async () => {
  //   setLoading(true);
  //   setError("");
  //   setCover("");
  //   try {
  //     const res = await fetch("/api/generate", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ jobDescription: desc }),
  //     });
  //     if (!res.ok) throw new Error(await res.text());
  //     const data = await res.json();
  //     setCover(data.coverLetter ?? data.text ?? "");
  //   } catch (error:unknown) {
  //     setError(error.message || "Error generating cover letter");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
<div className="outer py-5">
    <div className="container mx-auto">
<div className="
  pointer-events-none
  absolute inset-0
  bg-[radial-gradient(circle_at_top_right,#6d28d9,transparent_20%)]
  opacity-25
  left-10

" />
            <h1 className="text-[48px] text-white leading-tight ">Your chat<b className="bg-gradient-to-r from-cyan-300 via-teal-400 to-orange-300 bg-clip-text text-transparent">GPT</b> For  Images</h1>
<div className="search-preview flex flex-col items-center py-10">
      <ImageGenerator/>
      <InputField />
      </div>

</div>
</div>
  );
}
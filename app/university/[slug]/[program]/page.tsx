import { programsDetails } from "@/data/programDetails";

type ProgramParams = {
  slug: string;
  program: string;
};

export default function ProgramPage({ params }: { params: ProgramParams }) {
  const { slug, program } = params;

  // Find the matching program
  const programData = programsDetails.find(
    (p) => p.slug === slug && p.program === program
  );

  // Handle case where program is not found
  if (!programData) {
    return <h1>Program not found for {slug} University.</h1>;
  }

  return (
    <div>
      <h1>{programData.title}</h1>
      <p>{programData.description}</p>
      <ul>
        <li>
          <strong>Duration:</strong> {programData.duration}
        </li>
        <li>
          <strong>Eligibility:</strong> {programData.eligibility}
        </li>
        <li>
          <strong>Fee:</strong> {programData.fee}
        </li>
      </ul>
    </div>
  );
}

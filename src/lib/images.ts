/**
 * No image-generation tool is available in this environment, so photography is
 * sourced from Picsum with descriptive seeds tied to the real place/program each
 * image stands in for (see design-analysis.md, Section 4.8 of the Taste Skill).
 * Before this direction ships, these seeds mark exactly which real photographs
 * (Brownsville, Goleta, Oceanside, California coastal work, advisory board
 * headshots) need to replace them.
 */
export function photoUrl(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

import { Experience } from "../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': '*',
      },
    }
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;


  return experiences;
};

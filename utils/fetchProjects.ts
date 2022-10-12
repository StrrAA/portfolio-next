import { Project } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': '*',
      },
    }
  );

  const data = await res.json();
  const projects: Project[] = data.projects;


  return projects;
};

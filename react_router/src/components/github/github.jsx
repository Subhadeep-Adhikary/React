import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  if (!data) {
    return <div className="text-center m-4 p-4 text-2xl">Loading GitHub profile...</div>;
  }

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img className='mx-auto mt-4 rounded-full' src={data.avatar_url} alt="Git profile" width={300} />
    </div>
  );
}

export async function githubInfoLoader() {
  const response = await fetch("https://api.github.com/users/Subhadeep-Adhikary");

  if (!response.ok) {
    throw new Response("Failed to load GitHub profile", { status: response.status });
  }

  return response.json();
}

export default Github


import React, { FC } from "react";

type PageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const Meeting: FC<PageProps> = ({ params }) => {
  return <div>{params.id} </div>;
};

export default Meeting;

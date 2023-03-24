import Head from "next/head";
import { useAppDispatch, useAppSelector } from "@/state/store";
import { nextPage } from "@/state/features/pageCountSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const pageCount = useAppSelector((state) => state.page.currentPage);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        INDEX
        <button onClick={() => dispatch(nextPage())}>DODAJ STRONE</button>{" "}
        Obecna Strona : {pageCount}
      </div>
    </>
  );
}

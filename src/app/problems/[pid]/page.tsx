"use client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Topbar from "@/Components/Topbar/Topbar";
import Workspace from "@/Components/Workspace/Workspace";
import {  ProblemDescription } from "@/utils/types/types";
import useHasMounted from "@/hooks/useHasMounted";
import { ProblemsApi } from "@/apis/problems-api";
import { pid } from "process";

type ProblemPageProps = {
  params  : {pid : string}
};

const ProblemPage: React.FC<ProblemPageProps> = ({ params  }) => {

  const { data : problem,loading, error} = useApiData(params.pid);
  


  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <div>
      <Topbar problemPage={!loading && !!problem ? true : false} />
      {loading ? (
        <div>Loading...</div>
      ) : !problem ? (
        <div>Problem not found {problem}</div>
      ) :
      <Workspace problem={problem} />
      }
    </div>
  );
};

export default ProblemPage;

function useApiData(problemId : string ) {
  const [data, setData] = useState<ProblemDescription>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await ProblemsApi.getProblemDescription(problemId);
        setData(response);
        console.log("this is pid : a-", pid , "--" , problemId.length)
        console.log("this is data : ", data);
      } catch (err) {
        console.log(err)
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred.'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pid]);

  return { data, loading, error };
}


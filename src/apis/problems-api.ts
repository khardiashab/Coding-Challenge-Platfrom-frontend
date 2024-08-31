import { mockProblemsApi } from "@/dummy-data/mock-problems-api";
import { DBProblem, DBSolvedProblem, ProblemDescription } from "@/utils/types/types";

export const ProblemsApi = {

    getAllProblems : async() : Promise<DBProblem[]> =>{
        const problems = (await mockProblemsApi.getAllProblems()).data;
        return problems ; 
    },

    getAllSolvedProblems : async() : Promise<DBSolvedProblem[]> => {
        return (await mockProblemsApi.getAllSolvedProblems()).data;
    },

    getProblemDescription : async (problemId : string) : 
    Promise<ProblemDescription> =>{
        const Response = await mockProblemsApi.getProblemDescription(problemId);
        console.log(Response);
        return Response.data;
    }
}

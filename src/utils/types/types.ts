export type ValidationErrors = {
    displayName?: string;
    email?: string;
    password?: string;
  };

export type RegisterFormData = {
  displayName: string;
  email: string;
  password: string;
};

export type LoginFormData ={
  email : string;
  password : string;
}

export type ResetPasswordFormData = {
  email : string;
}

export type ApiResponse<T> = {
  status : number;
  data : T;
}

export type AuthResponse = {
  message: string;
  user?: User;
  token?: string;
  error?: string;
};

export type ProblemsRespons<T> = {
	message : string;
	problems? : T;
	error? : string;
}

export type User = {
  id: string;
  displayName: string;
  email: string;
};



// NOTE  ALL problems related types

export interface ISettings {
	fontSize: string;
	settingsModalIsOpen: boolean;
	dropdownIsOpen: boolean;
}
export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

// local problem data
export type ProblemDescription = {
	id: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	order: number;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
};

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};


export type DBSolvedProblem = {
	id : string;
	status : "Active" | "Solved" | "error";
	time : string;
}

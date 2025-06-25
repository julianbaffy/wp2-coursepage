export type Course = {
	courseID: string;
	teacher: string;
};

export type Link = {
	courseID: string;
	title: string;
	url: string;
	description?: string;
	teacher?: string;
};
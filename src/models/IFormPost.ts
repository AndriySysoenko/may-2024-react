export interface IFormPost {
    title: string,
    body: string,
    userId: number,
}

export interface IPost extends IFormPost {
    id:number
}
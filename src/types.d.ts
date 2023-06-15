declare global {
  export interface ITopMenu {
    title: string;
    shortKey?: string;
    children?: Array<ITopMenu>;
  }
}

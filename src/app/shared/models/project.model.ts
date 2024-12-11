export interface Project {
    id: number;
    project_title:string;
    project_description:string;
    category_id:number;
    product_type_id:number;
    project_content:string; 
    project_images: string[];
    project_video: string[];
    created_at: string; // Data di creazione
    updated_at:string;
}
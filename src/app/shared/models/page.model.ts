export interface Page {
    id: number;
    page_name:string;
    slug:string;
    nav_group_name:string;
    page_title:string;
    page_subtitle:string;
    page_short_description:string;
    page_content:string; 
    images: string[];
    created_at: string; // Data di creazione
    updated_at:string;

}
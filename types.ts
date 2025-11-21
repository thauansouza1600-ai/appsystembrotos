
// FIX: Import React to provide the React namespace for React.ReactNode.
import type * as React from 'react';

// --- Consultant System Types (Presentation Mode) ---

export type ConsultantRole = 'admin' | 'leader' | 'consultant';

export interface Consultant {
    id: string; 
    auth_id: string;
    name: string;
    email: string;
    whatsapp: string;
    document_id?: string;
    address?: string;
    city?: string;
    state?: string;
    role: ConsultantRole;
    parent_id?: string;
    created_at: string;
}

export interface ConsultantStats {
    totalConsultants: number;
    activeConsultants: number;
    totalTeams: number;
    newThisMonth: number;
}

export interface Sale {
    id: number;
    consultant_id: string;
    quantity: number;
    total_amount: number;
    created_at: string;
}

export interface Notification {
    id: number;
    user_id: string;
    title: string;
    message: string;
    read: boolean;
    created_at: string;
}

// --- MOCK DATA INTERFACES ---

export interface VideoLesson {
    id: number;
    title: string;
    video_url: string;
    category: 'sales' | 'products' | 'leadership' | 'company' | string;
    created_at: string;
}

export interface MarketingMaterial {
    id: number;
    type: 'image' | 'text';
    title: string;
    category: 'products' | 'company' | 'promo' | 'texts' | string;
    image_url?: string;
    content?: string;
    created_at: string;
}

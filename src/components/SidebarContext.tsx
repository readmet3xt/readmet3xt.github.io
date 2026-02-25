import { createContext, useContext, ReactNode } from 'react';

interface SidebarContextType {
    isOpen: boolean;
    isScrolling: boolean;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};

interface SidebarProviderProps {
    children: ReactNode;
    isOpen: boolean;
    isScrolling: boolean;
}

export const SidebarProvider = ({ children, isOpen, isScrolling }: SidebarProviderProps) => {
    return (
        <SidebarContext.Provider value={{ isOpen, isScrolling }}>
            {children}
        </SidebarContext.Provider>
    );
};

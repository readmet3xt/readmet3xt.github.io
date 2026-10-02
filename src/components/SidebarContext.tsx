import { createContext, useContext, ReactNode } from 'react';

interface SidebarContextType {
    isOpen: boolean;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};

export const SidebarProvider = ({ children, isOpen }: { children: ReactNode; isOpen: boolean }) => (
    <SidebarContext.Provider value={{ isOpen }}>
        {children}
    </SidebarContext.Provider>
);

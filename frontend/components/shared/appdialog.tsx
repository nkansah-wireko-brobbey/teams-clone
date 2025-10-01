import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type AppDialogProps = {
    title?: string;
    description?: string;
    children?: React.ReactElement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    show?: boolean;
    trigger?: React.ReactElement;
}
const AppDialog = ({ title, description, children, open, onOpenChange, show, trigger }: AppDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {
                trigger ? (trigger) : (
                    <DialogTrigger>Open</DialogTrigger>
                )
            }
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {
                    children
                }
            </DialogContent>
        </Dialog>
    )
}

export default AppDialog
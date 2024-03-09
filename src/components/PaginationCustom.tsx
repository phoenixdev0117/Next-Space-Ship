'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import React, { useState } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';



interface PaginationCustomProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
}

export const PaginationCustom: React.FC<PaginationCustomProps> = ({ currentPage, totalPages }) => {

    // const searchParams = useSearchParams();
    let pathname = usePathname();
    pathname = pathname.replace('/', '');
    let pathNumber = 0
    pathNumber = Number(pathname);
    currentPage = pathNumber;

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={currentPage - 1 > 0 ? `${currentPage - 1}` : `${1}`} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href={currentPage > 1 ? `${currentPage - 1}` : `${1}`}>
                        {currentPage - 1 > 0 ? currentPage - 1 : null}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href={`${totalPages}`}>
                        {totalPages}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext href={currentPage < totalPages ? `${currentPage + 1}` : `${totalPages}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
export default PaginationCustom;
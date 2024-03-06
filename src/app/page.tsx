import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "@/components/dark-toggle";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center py-5">
        <ModeToggle />
      </header>
      <main className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-row justify-center items-center w-full bg-amber-700">
          <section className="flex-initial w-8/12 flex-col w-8/10 mr-2 bg-green-500 gap-2">
            <Button variant={"outline"}>Space-Ship-Forum</Button>

            <h1>The initial posts are settled here below</h1>

            <Drawer>
              <DrawerTrigger>
                <Button variant="outline">See more</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>POST DYNAMIC TITTLE</DrawerTitle>
                  <DrawerDescription>POST INFORMATION</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>VIEW MORE</Button>
                  <DrawerClose>
                    <Button variant="outline">CLOSE</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

          </section>
          <section className="flex-initial w-3/12 bg-fuchsia-600">
            Section of widgets
          </section>
        </div>

        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

      </main >
    </>
  );
}

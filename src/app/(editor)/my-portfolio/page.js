"use client";
import SectionHeading from "@/app/components/SectionHeading";
import React, { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import EditPortfolio from "@/app/components/EditPortfolio";
import { Skeleton } from "@/app/components/ui/skeleton";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

function EditPortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container flex flex-col items-center justify-center gap-4">
        <Skeleton className="w-full h-[20vh] m-4" />
        <Skeleton className="w-full h-[60vh] m-2" />
      </div>
    );
  }

  return (
    <section className="container">
      <Button variant="link">
        <Link href="/" className="my-4 flex gap-2 items-center">
          <BiArrowBack /> Home
        </Link>
      </Button>
      <div>
        <SectionHeading
          title="Edit your"
          badge="Your area"
          gradientText="Portfolio"
        />
        <p className="text-muted-foreground">
          <Button variant="link" className="p-0 pr-2">
            How to make your portfolio?
          </Button>
          Not Sure how to get started or are you new to coding, don't worry what
          you are about to do isn't coding, but we suggest you watch this 2min
          video for better understanding.{" "}
        </p>
      </div>

      <EditPortfolio />
    </section>
  );
}

export default EditPortfolioPage;

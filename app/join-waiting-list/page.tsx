"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from "@/components/ui/form";
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WaitingListFormSchema as formSchema } from "@/store/formSchemas";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
export default function JoinWaitingList() {
  const Router = useRouter();
  const JoinWaitingListForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      getCallBack: false,
      discoveredFrom: "",
      otherDiscoveredFrom: "",
      phoneNumber: "",
      email: "",
      name: "",
    },
  });

  const platformWatcher: string = JoinWaitingListForm.watch("discoveredFrom");
  const platformList: string[] = [
    "Product Hunt",
    "Google",
    "Twitter",
    "LinkedIn",
    "Instagram",
    "Website",
    "Word of Mouth/ Refferal",
    "other",
  ];
  const { toast } = useToast();

  const WaitingListFormHandler = async (data: z.infer<typeof formSchema>) => {
    try {
      const formData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        discoveryMethod: data.discoveredFrom.toString(),
        exceptionalDiscovery: data.otherDiscoveredFrom,
        getCallBack: !!data.getCallBack,
      };

      const response = await axios.post(
        "https://menteor.menteor-space.workers.dev/addToWaitingList",
        { formData }
      );

      const userData = response.data.name;

      if (!userData) {
        console.log("error");
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }

      return Router.push(
        "/join-waiting-list/waiting-list-confirmed/" + userData
      );
    } catch (error) {
      console.log(error);

      throw error;
    }
  };
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [otherValue, setOtherValue] = React.useState("")
  const [search, setSearch] = React.useState("");
  return (

    <section className="w-full flex flex-col justify-around items-center  gap-8 max-w-xl sm:max-w-5xl mx-auto py-2 mb-20">
      <section className="w-full px-5" aria-labelledby="Waiting list Hero">
        <h1 className="text-2xl md:text-4xl mb-4 font-bold font-syne text-center">
          Join Our Waiting List
        </h1>
        <p className="text-sm md:text-md font-inter text-center">
          Be the first to know when we launch. Sign up for our exclusive waiting
          list to get notified when we launch.
        </p>
      </section>
      <section
        className="px-5 md:px-3 w-full"
        aria-labelledby="Waiting list Form"
      >
        <div className="w-full border text-card-foreground shadow-sm flex flex-col  gap-4  bg-[#E5F4F2] py-8 backdrop-blur-sm rounded-lg">
          <div className="px-6 flex flex-col gap-4">
            <p className="text-sm md:text-md font-syne text-[#009379] font-medium text-center mt-2">
              We deliver{" "}
              <span className="font-medium text-primary">Menteor</span> based on
              your requirements, so your voice matters!
            </p>
            <Form {...JoinWaitingListForm}>
              <form
                onSubmit={JoinWaitingListForm.handleSubmit(
                  WaitingListFormHandler
                )}
                className="w-full flex flex-col gap-4"
              >
                <FormField
                  control={JoinWaitingListForm.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem className="text-left">
                        <FormLabel className="font-syne text-sm">
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Ex. John Doe"
                            className="font-inter "
                          />
                        </FormControl>
                        <FormMessage className="font-inter text-xs text-red-500 " />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={JoinWaitingListForm.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem className="text-left">
                        <FormLabel className="font-syne text-sm">
                          Your Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Ex. john.doe@me.com"
                            className="font-inter "
                          />
                        </FormControl>
                        <FormMessage className="font-inter text-xs text-red-500 " />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={JoinWaitingListForm.control}
                  name="phoneNumber"
                  render={({ field }) => {
                    return (
                      <FormItem className="text-left">
                        <FormLabel className="font-syne text-sm">
                          Your Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Ex. (123) 456-7890"
                            className="font-inter "
                          />
                        </FormControl>
                        <FormMessage className="font-inter text-xs text-red-500 " />
                      </FormItem>
                    );
                  }}
                />
                {/* issue 13-add-select-input-with-a-search-box */}
                <FormLabel className="font-syne text-sm">
                  How you came to know about Menteor?
                </FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full md:w-[950px] justify-between hover:bg-light" // Adjust this
                    >
                      <span className="font-normal">
                        {value ? value : "Please select one from the list"}
                      </span>

                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-30" />
                    </Button>

                  </PopoverTrigger>
                  <PopoverContent className="w-full md:w-[950px] p-0 text-left">

                    <Command>

                      <CommandInput
                        placeholder="Search platform..."
                        className="font-inter"
                      />
                      <CommandGroup
                        className="max-h-[300px] overflow-y-auto overflow-x-hidden cursor-default select-none text-sm outline-none focus:bg-[#E5F4F2] focus:ring-1  focus:ring-[#009379] focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      >
                        {platformList.map((platform) => (
                          <CommandItem
                            key={platform}
                            value={platform}
                            className="hover:ring-1 hover:ring-[#009379]"
                            onSelect={(currentValue) => {
                              if (currentValue === "other") {
                                setOtherValue("");
                              }
                              setValue(currentValue);
                              setOpen(false);
                            }}
                          >
                            {platform}
                            <CheckIcon
                              className={cn(
                                "font-inter text-xs text-red-500",
                                value === platform ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                        {search && platformList.every(platform => !platform.includes(search)) && (
                          <CommandItem
                            key="other"
                            value="other"
                            className="hover:ring-1 hover:ring-[#009379]"
                            onSelect={(currentValue) => {
                              setOtherValue(""); // Reset other value when selecting "other"
                              setValue(currentValue);
                              setOpen(false);
                            }}
                          >
                            Other
                            <CheckIcon
                              className={cn(
                                "font-inter text-xs text-red-500",
                                value === "other" ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        )}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>

                </Popover>
                {/* The added input field for "other" option when user pressother*/}
                {value === "other" && (
                  <FormField
                    control={JoinWaitingListForm.control}
                    name="otherDiscoveredFrom"
                    render={({ field }) => (
                      <FormItem className="text-left">
                        <FormLabel className="font-syne text-sm">
                          Please specify
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Ex. Hashnode, Medium, etc."
                            className="font-inter"
                          />
                        </FormControl>
                        <FormMessage className="font-inter text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                )}
                {/* end of ComboBox */}
                <FormField
                  control={JoinWaitingListForm.control}
                  name="getCallBack"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex gap-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-4 md:mt-2.5"
                          />
                        </FormControl>
                        <FormLabel className="font-syne text-sm pb-2">
                          I'd like to recieve a call back from Menteor team, so
                          that I can share my expectations and Opinions on
                          Menteor
                        </FormLabel>

                        <FormMessage className="font-inter text-xs text-red-500 " />
                      </FormItem>
                    );
                  }}
                />
                <Button type="submit">Be the first of us</Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </section>
  );
}

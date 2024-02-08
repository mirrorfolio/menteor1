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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WaitingListFormSchema as formSchema } from "@/store/formSchemas";
import { Checkbox } from "@/components/ui/checkbox";
import { addToWaitingList } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
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
      const userData = await addToWaitingList(formData);
      console.log(userData);

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
                {/* here we should use ComboBox from shadCn example,
                 but it need to be refactored to use as a common UI component
                  like other form components, due to time constraints we are going with select */}
                <FormField
                  control={JoinWaitingListForm.control}
                  name="discoveredFrom"
                  render={({ field }) => {
                    return (
                      <FormItem className="text-left">
                        <FormLabel className="font-syne text-sm">
                          How you came to know about Menteor?
                        </FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          defaultValue="Please select one from the list"
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder="Please select one from the list"
                                className="font-inter "
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#f1f1ff]">
                            {platformList.map((platform) => (
                              <SelectItem
                                key={platform}
                                value={platform}
                                className="font-inter "
                              >
                                {platform}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="font-inter text-xs text-red-500 " />
                      </FormItem>
                    );
                  }}
                />
                {platformWatcher === "other" && (
                  <FormField
                    control={JoinWaitingListForm.control}
                    name="otherDiscoveredFrom"
                    render={({ field }) => {
                      return (
                        <FormItem className="text-left">
                          <FormLabel className="font-syne text-sm">
                            Please specify
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              {...field}
                              placeholder="Ex. Hashnode, Medium, etc."
                              className="font-inter "
                            />
                          </FormControl>
                          <FormMessage className="font-inter text-xs text-red-500 " />
                        </FormItem>
                      );
                    }}
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

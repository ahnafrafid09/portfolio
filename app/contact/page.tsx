"use client";
import { useForm } from "react-hook-form";
import React, { useTransition } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { contact } from "@/lib/data";
import { sendEmail } from "@/lib/send-email";
import { toast } from "sonner";

import { motion } from "framer-motion";
import { ContactSchema } from "@/schema";

const Contact = () => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      service: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    startTransition(() => {
      sendEmail(values)
        .then((data) => {
          if (data.error) {
            toast(data.error);
          } else {
            toast("Message sent successfully!");
            reset();
          }
        })
        .catch(() => {
          toast("Failed to send message. Please try again.");
        });
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Lets Work With Us</h3>
              <p className="text-white/60">
                If you need a programmer for your project, please fill out the
                form below
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <Input {...register("firstname")} placeholder="Firstname" />
                  {errors.firstname && (
                    <p className="text-red-500 text-xs pl-1 mt-1">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <Input {...register("lastname")} placeholder="Lastname" />
                  {errors.lastname && (
                    <p className="text-red-500 text-xs pl-1 mt-1">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs pl-1 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <Input
                    {...register("phone")}
                    placeholder="Phone Number"
                    type="tel"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs pl-1 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Select Field */}
              <div className="flex flex-col gap-1">
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="frontend">
                        Front End Web Development
                      </SelectItem>
                      <SelectItem value="backend">
                        Back End Web Development
                      </SelectItem>
                      <SelectItem value="fullstack">
                        Fullstack Web Development
                      </SelectItem>
                      <SelectItem value="ui/ux">UI/UX Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-sm">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1">
                <Textarea
                  {...register("message")}
                  className="h-[200px]"
                  placeholder="Type your message here"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <Button type="submit" size="md" className="max-w-40">
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contact.map((data, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{data.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{data.title}</p>
                    <h3 className="text-xl">{data.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

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

import { contact, services } from "@/lib/data";
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
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl md:text-4xl text-accent font-semibold">
                Let's Work With Us
              </h3>
              <p className="text-white/60 text-sm md:text-base lg:text-lg">
                If you need a programmer for your project, please fill out the
                form below
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <Input
                    {...register("firstname")}
                    placeholder="Firstname"
                    className="text-sm md:text-base"
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-xs md:text-sm pl-1 mt-1">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <Input
                    {...register("lastname")}
                    placeholder="Lastname"
                    className="text-sm md:text-base"
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-xs md:text-sm pl-1 mt-1">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className="text-sm md:text-base"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs md:text-sm pl-1 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <Input
                    {...register("phone")}
                    placeholder="Phone Number"
                    type="tel"
                    className="text-sm md:text-base"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs md:text-sm pl-1 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Select Field */}
              <div className="flex flex-col gap-1">
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger className="w-full text-sm md:text-base">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-sm md:text-base">
                        Services
                      </SelectLabel>
                      {services.map((data, index) => (
                        <SelectItem
                          key={index}
                          value={data.title}
                          className="text-sm md:text-base"
                        >
                          {data.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1">
                <Textarea
                  {...register("message")}
                  className="h-[200px] text-sm md:text-base"
                  placeholder="Type your message here"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 text-sm md:text-base"
              >
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
                    <div className="text-[24px] md:text-[28px]">
                      {data.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm md:text-base">
                      {data.title}
                    </p>
                    <h3 className="text-lg md:text-xl">{data.description}</h3>
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

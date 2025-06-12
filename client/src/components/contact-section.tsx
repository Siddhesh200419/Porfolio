import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Siddhesh200419",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin
    },
    {
      name: "Twitter",
      url: "#",
      icon: Twitter
    },
    {
      name: "Website",
      url: "#",
      icon: Globe
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to build something amazing<br />
            together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's make it happen ✨
          </p>

          {/* Contact Form */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-left block">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  {...form.register("name")}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-left block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  {...form.register("email")}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-left block">Message</Label>
              <Textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                {...form.register("message")}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 resize-none"
              />
              {form.formState.errors.message && (
                <p className="text-sm text-red-600">{form.formState.errors.message.message}</p>
              )}
            </div>
            <Button 
              type="submit" 
              size="lg"
              disabled={contactMutation.isPending}
              className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 py-4"
            >
              {contactMutation.isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold text-gray-900 mb-2">Connect</h3>
                <p className="text-gray-600">hello@siddheshgite.dev</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Follow</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <link.icon className="h-4 w-4 text-gray-700" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

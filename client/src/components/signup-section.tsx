import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  businessType: z.string().min(1, {
    message: "Please select your industry.",
  }),
});

export function SignupSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
    },
  });

  const submitLeadMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      return await apiRequest("POST", "/api/leads", values);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thanks for signing up! Check your email to complete registration.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    submitLeadMutation.mutate(values);
  };

  return (
    <section id="signup" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Deal-Making?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Start your 14-day free trial today. No credit card required.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-slate-900">Get Started Now</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Industry</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="consulting">Business Coaching & Consulting</SelectItem>
                              <SelectItem value="digital">Digital Products & Services</SelectItem>
                              <SelectItem value="real_estate">Real Estate</SelectItem>
                              <SelectItem value="finance">Financial Services</SelectItem>
                              <SelectItem value="legal">Legal Services</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3"
                      disabled={submitLeadMutation.isPending}
                    >
                      {submitLeadMutation.isPending ? "Processing..." : "Start Free Trial"}
                    </Button>
                    
                    <p className="text-sm text-slate-500 mt-4 text-center">
                      By signing up, you agree to our 
                      <a href="#" className="text-primary hover:underline mx-1">Terms</a> and 
                      <a href="#" className="text-primary hover:underline mx-1">Privacy Policy</a>.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

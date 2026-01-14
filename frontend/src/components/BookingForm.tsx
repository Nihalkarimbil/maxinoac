"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Select, DatePicker, Button, ConfigProvider } from "antd";

import api from "@/lib/api";
import toast from "react-hot-toast";

const { Option } = Select;
const { TextArea } = Input;

export default function BookingForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const formattedValues = {
        ...values,
        preferredDate: values.preferredDate
          ? values.preferredDate.format("YYYY-MM-DD")
          : undefined,
      };

      await api.post("/bookings", formattedValues);
      toast.success("Booking created successfully! Redirecting to WhatsApp...");

      // WhatsApp Integration
      const adminPhoneNumber = "8111932523"; // Replace with your actual WhatsApp number
      const message =
        `*New Service Booking Received* 🛠️%0A%0A` +
        `*Name:* ${values.name}%0A` +
        `*Phone:* ${values.phone}%0A` +
        `*City:* ${values.place}%0A` +
        `*Service:* ${values.serviceType}%0A` +
        `*Device:* ${values.deviceType}%0A` +
        `*Date:* ${formattedValues.preferredDate}%0A` +
        `*Address:* ${values.address}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminPhoneNumber}&text=${message}`;
      window.open(whatsappUrl, "_blank");

      form.resetFields();
      router.push("/");
    } catch (error: any) {
      console.error("Booking failed", error);
      const msg =
        error.response?.data?.error ||
        "Something went wrong. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Validation failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0A66C2",
          borderRadius: 8,
          fontFamily: "inherit",
        },
        components: {
          Form: {
            itemMarginBottom: 12,
          },
        },
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        size="large"
        requiredMark="optional"
        className="font-sans"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^\d{10,}$/,
                message: "Please enter a valid phone number",
              },
            ]}
          >
            <Input placeholder="9876543210" />
          </Form.Item>

          <Form.Item
            name="place"
            label="Place/City"
            rules={[{ required: true, message: "Please enter your city" }]}
          >
            <Input placeholder="Mumbai" />
          </Form.Item>

          <Form.Item
            name="preferredDate"
            label="Preferred Date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Form.Item
            name="serviceType"
            label="Service Type"
            initialValue="Installation"
            rules={[
              { required: true, message: "Please select a service type" },
            ]}
          >
            <Select>
              <Option value="Installation">Installation</Option>
              <Option value="Repair">Repair</Option>
              <Option value="Maintenance">Maintenance</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="deviceType"
            label="Device Type"
            initialValue="Air Conditioner"
            rules={[{ required: true, message: "Please select a device type" }]}
          >
            <Select>
              <Option value="Air Conditioner">Air Conditioner</Option>
              <Option value="Fridge">Fridge</Option>
              <Option value="Washing Machine">Washing Machine</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          name="address"
          label="Full Address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <TextArea rows={4} placeholder="Flat No, Wing, Society, Street..." />
        </Form.Item>

        <Form.Item className="flex justify-end gap-4">
          <Button
            type="default"
            htmlType="reset"
            size="large"
            className="h-12 mr-3 text-lg font-medium"
          >
            Reset
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            size="large"
            className="h-12 w-36 text-lg font-medium"
          >
            Confirm Booking
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}

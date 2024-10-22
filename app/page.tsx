"use client";

import { Formik } from "formik";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [weatherData, setWeatherData] = React.useState<any>(null);

  const fetchWeather = async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
    );

    return response.data;
  };

  const weatherMutation = useMutation({
    mutationFn: fetchWeather,
    onSuccess: (data) => {
      setWeatherData(data);
      toast.success(`Weather fetched for ${data.name}`);
    },
    onError: () => {
      setWeatherData(null);
      toast.error("City not found or API error!");
    },
  });

  return (
    <div className="flex flex-col items-center gap-4 p-4 mt-5">
      <div className="inline-block max-w-xl text-center justify-center w-full">
        <h1 className={title()}>Weather App</h1>
        <h2 className={subtitle()}>Check the weather easily</h2>
      </div>

      <Formik
        initialValues={{ city: "" }}
        onSubmit={(values) => {
          weatherMutation.mutate(values.city);
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form
            className="flex flex-col gap-5 w-full max-w-xl"
            onSubmit={handleSubmit}
          >
            <Input
              required
              className="w-full"
              label="City"
              name="city"
              placeholder="Enter city name"
              value={values.city}
              onChange={handleChange}
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1 h-10 min-h-[40px]"
                color={"primary"}
                type={"submit"}
              >
                Check Weather
              </Button>
              <Button
                className="flex-1 h-10 min-h-[40px]"
                color="default"
                type="button"
                onClick={() => {
                  handleChange({
                    target: { name: "city", value: "" },
                  });
                  setWeatherData(null);
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        )}
      </Formik>
      {weatherData && (
        <div className="flex flex-col items-center gap-2 w-full max-w-xl p-4 rounded-md border-1">
          <h3 className="text-2xl font-bold">{weatherData.name}</h3>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-green-500">
              <span className="font-bold">Temperature:</span>{" "}
              {weatherData.main.temp}°C
            </p>
            <p className="text-lg">
              <span className="font-bold">Weather:</span>{" "}
              {weatherData.weather[0].description}
            </p>
            <p className="text-lg">
              <span className="font-bold">Humidity:</span>{" "}
              {weatherData.main.humidity}%
            </p>
            <p className="text-lg">
              <span className="font-bold">Wind Speed:</span>{" "}
              {weatherData.wind.speed} m/s
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

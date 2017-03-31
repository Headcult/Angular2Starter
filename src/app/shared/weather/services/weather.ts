export class Weather {
  base: string;
  clouds:
    {
      all: number;
    };
  cod: number;
  coord:
    {
      lat: number;
      lon: number;
    };
  dt: number;
  id: number;
  main:
    {
      humidity: number;
      pressure: number;
      temp_max: number;
      temp_min: number;
      temp: number;
    };
  name: string;
  sys:
    {
      country: string;
      id: number;
      message: number;
      sunrise: number;
      sunset: number;
      type: number;
    };
  weather:
    [
      {
        description: string;
        icon: string;
        id: number;
        main: string;
      }
    ];
  wind:
    {
      deg: number;
      speed: number;
    };
}

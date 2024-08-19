export type Status = "normal" | "warning" | "critical";

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface Fault {
  fault_coordinates: Coordinate;
  description: string;
  reported_at: string;
  status: Status;
}

export interface PipelineRoute<T extends Status> {
  id: number;
  name: string;
  state: string;
  coordinates: {
    start: Coordinate;
    end: Coordinate;
  };
  status: T;
  faults: T extends "normal" ? never : Fault[]; // Faults only exist for 'warning' or 'critical' statuses
}

export interface PipelineProps {
  pipelines: PipelineData[];
}

export interface PipelineData {
  from: string;
  to: string;
  condition: "green" | "yellow" | "red";
}

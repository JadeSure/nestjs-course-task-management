import { TaskStatus } from '../task.model';
import { IsEnum, IsOptional } from 'class-validator';

export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsOptional()
  search?: string;
}

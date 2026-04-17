export interface MoveItem {
  key: string;
  qty: number;
}

export interface StepOneData {
  name: string;
  phone: string;
  from_city: string;
  from_address: string;
  from_floor: number;
  from_elevator: boolean;
  to_city: string;
  to_address: string;
  to_floor: number;
  to_elevator: boolean;
  move_date: string;
  move_time: string;
}

export interface StepTwoData {
  items: MoveItem[];
  boxes: number;
}

export interface MoveRequest extends StepOneData, StepTwoData {}

export interface Mover {
  id: string;
  name: string;
  phone: string;
  city: string;
  active: boolean;
  created_at: string;
}

export interface MoveRequestRecord extends MoveRequest {
  id: string;
  created_at: string;
  status: string;
}

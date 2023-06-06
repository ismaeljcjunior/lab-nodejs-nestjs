import { Replace } from "src/helpers/Replace";
import { INotificationProps } from "../interfaces/interfaces";
import { Content } from "./content";

export class Notification {
  private props: INotificationProps;

  constructor(props: Replace<INotificationProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  public set recepientId(recepientId: string) {
    this.props.recepientId = recepientId
  }
  public get recepientId(): string {
    return this.props.recepientId
  }
  public set content(content: Content) {
    this.props.content = content
  }
  public get content(): Content {
    return this.props.content
  }
  public set category(category: string) {
    this.props.category = category
  }
  public get category(): string {
    return this.props.category
  }
  public set readAt(readAt: Date) {
    this.props.readAt = readAt
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt
  }

  public get createdAt(): Date | null | undefined {
    return this.props.createdAt
  }
}


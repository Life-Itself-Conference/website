import { Modal } from "@/types";
import { GenericModal } from "../../molecules/GenericModal";
import * as styles from "./Banner.css";

export interface BannerProps {
  modal: Modal;
}

export const Banner = (props: BannerProps) => (
  <div className={styles.banner}>
    {props.modal.fields?.title}
    <GenericModal
      modal={props.modal}
      trigger={
        <button className={styles.button} type="button">
          View Details
        </button>
      }
    />
  </div>
);

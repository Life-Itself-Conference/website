import { ReactNode } from "react";
import { Modal } from "../../atoms/Modal";
import * as styles from "./NewsletterModal.css";

export interface NewsletterModalProps {
  trigger?: ReactNode;
}

export const NewsletterModal = (props: NewsletterModalProps) => (
  <Modal
    ariaLabel="Join Newsletter"
    className={styles.modal}
    trigger={props.trigger}
  >
    <h2>Join Newsletter</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis semper
      augue. Sed sed ligula ac odio luctus cursus. Sed sed nulla rutrum,
      fringilla lorem et, bibendum risus. Mauris a leo enim. Integer dolor leo,
      gravida eget dui eget, accumsan condimentum purus. Morbi ut urna quam. Sed
      consectetur fringilla nisi, a mollis metus pulvinar vel. Pellentesque
      aliquam nisl ut tellus tempor, non tempor nunc pharetra. Nulla
      sollicitudin sed lacus at facilisis. Mauris non scelerisque augue, non
      pretium mauris.
    </p>
    <p>
      Suspendisse non dignissim turpis, quis consectetur quam. Quisque aliquet,
      neque vel faucibus vehicula, massa justo sodales diam, et condimentum
      sapien lacus eu sapien. Aliquam convallis eros massa, vel viverra metus
      posuere quis. Cras a arcu sit amet nisl scelerisque egestas. Nam sit amet
      mauris sed tellus convallis mattis ut id quam. Nulla tempus gravida lacus,
      sit amet semper ligula mattis in. Vivamus malesuada sapien ut venenatis
      pulvinar. Donec et mi finibus eros maximus posuere.
    </p>
    <p>
      Nulla bibendum erat sed urna fermentum porta. Donec nec ante congue,
      euismod nunc at, dapibus orci. Duis non lacinia ex. Ut id ultricies
      sapien. Mauris tincidunt leo et arcu iaculis, et aliquet lacus fermentum.
      Sed pretium dui nibh. Fusce convallis justo in accumsan egestas. Donec
      lacinia sem purus, a sodales ipsum interdum sit amet. Integer imperdiet
      nec ligula ac dictum. Quisque tristique mattis odio, sit amet accumsan
      eros varius eu. Aenean semper posuere tortor eu auctor. Vestibulum aliquam
      fringilla scelerisque.
    </p>
    <p>
      Nam posuere consequat felis, in imperdiet eros porta rhoncus. Vivamus
      accumsan libero maximus, dapibus libero vitae, congue eros. Sed consequat
      velit eleifend quam mattis, quis luctus massa tincidunt. Morbi vitae
      sagittis diam. Integer ut mi luctus mi luctus rutrum. Proin sed ornare
      quam. Cras semper condimentum sagittis. Praesent leo tellus, tincidunt nec
      viverra et, euismod vel nulla. Ut metus quam, cursus a felis ac, rutrum
      consectetur nisl. Cras scelerisque egestas ligula at tincidunt. Phasellus
      cursus nisi erat, fringilla hendrerit lorem lobortis eu. Proin porta,
      libero eu condimentum rutrum, sapien ex imperdiet est, ut aliquet nisl
      mauris tristique sapien. In vitae sem nunc.
    </p>
    <p>
      Aenean posuere libero nibh, ut accumsan mi lobortis eget. Proin
      pellentesque commodo dolor, ut porta sapien dignissim in. Fusce feugiat,
      tortor ut cursus ultricies, nulla nibh tincidunt est, vitae dignissim est
      nunc non ex. Suspendisse est nunc, posuere et pulvinar sed, hendrerit sed
      risus. Etiam dictum viverra tincidunt. Nunc cursus imperdiet suscipit.
      Etiam luctus magna in nunc sodales, eu finibus nulla faucibus. Etiam
      viverra rutrum feugiat. Etiam eget libero malesuada, pretium odio eu,
      tempus turpis.
    </p>
  </Modal>
);

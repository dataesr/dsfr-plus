import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { Side } from './layout/SideMenu';
import { Accordions } from './pages/components/Accordions';
import { Alerts } from './pages/components/Alerts';
import { Autocompletes } from './pages/components/Autocomplete';
import { Badges } from './pages/components/Badges';
import { Breadcrumbs } from './pages/components/Breadcrumb';
import { Buttons } from './pages/components/Buttons';
import { Checkboxes } from './pages/components/Checkboxes';
import { FileUploads } from './pages/components/FileUploads';
import { Headers } from './pages/components/Headers';
import { Inputs } from './pages/components/Inputs';
import { Listboxes } from './pages/components/Listboxes';
import { Menus } from './pages/components/Menu';
import { Modals } from './pages/components/Modal';
import { Notices } from './pages/components/Notices';
import { Radios } from './pages/components/Radios';
import { SegmentedControls } from './pages/components/SegmentedControls';
import { Selects } from './pages/components/Select';
import { SideMenus } from './pages/components/SideMenus';
import { Steppers } from './pages/components/Stepper';
import { TabsAndTab } from './pages/components/TabsAndTab';
import { TagInputs } from './pages/components/TagInputs';
import { Tags } from './pages/components/Tags';
import { Toasts } from './pages/components/Toasts';
import { Toggles } from './pages/components/Toggles';
import { Typography } from './pages/components/Typography';
import { QuickStart } from './pages/guides/QuickStart';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/utilisation/demarrage-rapide" replace />} />
        <Route path="/utilisation" element={<Side />}>
          <Route path="demarrage-rapide" element={<QuickStart />} />
        </Route>
        <Route path="/composants" element={<Side />}>
          <Route path="accordion" element={<Accordions />} />
          <Route path="ajout-de-fichier" element={<FileUploads />} />
          <Route path="alert" element={<Alerts />} />
          <Route path="autocomplete" element={<Autocompletes />} />
          <Route path="badge" element={<Badges />} />
          <Route path="button" element={<Buttons />} />
          <Route path="checkbox" element={<Checkboxes />} />
          <Route path="en-tete" element={<Headers />} />
          <Route path="fil-d-ariane" element={<Breadcrumbs />} />
          <Route path="indicateur-d-etape" element={<Steppers />} />
          <Route path="input" element={<Inputs />} />
          <Route path="interrupteur" element={<Toggles />} />
          <Route path="listbox" element={<Listboxes />} />
          <Route path="menu-button" element={<Menus />} />
          <Route path="menu-lateral" element={<SideMenus />} />
          <Route path="modal" element={<Modals />} />
          <Route path="notice" element={<Notices />} />
          <Route path="radio" element={<Radios />} />
          <Route path="select" element={<Selects />} />
          <Route path="tab" element={<TabsAndTab />} />
          <Route path="tag-input" element={<TagInputs />} />
          <Route path="tag" element={<Tags />} />
          <Route path="toast" element={<Toasts />} />
          <Route path="segmentedControl" element={<SegmentedControls />} />
          <Route path="typography" element={<Typography />} />
        </Route>
      </Route>
    </Routes>
  );
}
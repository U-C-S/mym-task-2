import {
  Button,
  Navbar,
  Paper,
  Stack,
  Title,
  Text,
  createStyles,
} from "@mantine/core";
import {
  BrandCampaignmonitor,
  Calendar,
  Dashboard,
  Help,
  Logout,
  Message,
  Settings,
} from "tabler-icons-react";

const useStyles = createStyles(() => ({
  all: {
    button: {
      color: "#f8f8f8",
    },
    "button:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },
}));

export default function Sidebar() {
  const { classes } = useStyles();

  return (
    <Navbar bg={"#131313"} w={260} className={classes.all}>
      <Navbar.Section>
        <Title order={1} color="#F8F8F8" align="center" mt={40}>
          Reaply
        </Title>
      </Navbar.Section>

      <Navbar.Section>
        <Stack spacing={"xs"} align="flex-start" pl={50} mt={40}>
          <Button leftIcon={<Dashboard />} variant="subtle">
            Dashboard
          </Button>
          <Button leftIcon={<Message />} variant="subtle">
            Messages
          </Button>
          <Button leftIcon={<Calendar />} variant="subtle">
            Calender
          </Button>
          <Button leftIcon={<BrandCampaignmonitor />} variant="subtle">
            Campigns
          </Button>
        </Stack>
      </Navbar.Section>

      <Navbar.Section mt={80}>
        <Stack spacing="xs" align="flex-start" pl={50}>
          <Button leftIcon={<Settings />} variant="subtle">
            Settings
          </Button>
          <Button leftIcon={<Help />} variant="subtle">
            Help?
          </Button>
        </Stack>
      </Navbar.Section>

      <Navbar.Section px={"20"} mt={40}>
        <Paper p="md" radius={"lg"} bg="#131313" withBorder mx={20}>
          <Text color={"#f8f8f8"} size="lg">
            Your free trial is about to end in 10 days
          </Text>
          <Stack my={"lg"} px={5}>
            <Text color={"#D4D4FC"} size="xs">
              You will not be billed during your free trial.
            </Text>
            <Text color={"#D4D4FC"} size="xs">
              To keep your projects running after the trial end, upgrade to a
              paid option.
            </Text>
          </Stack>

          <Button
            w={"100%"}
            variant="outline"
            radius={"md"}
            bg="rgba(212, 212, 252, 0.12);"
          >
            Upgrade
          </Button>
        </Paper>
      </Navbar.Section>

      <Navbar.Section mt={40} pl={50}>
        <Button leftIcon={<Logout />} variant="subtle">
          Logout
        </Button>
      </Navbar.Section>
    </Navbar>
  );
}
